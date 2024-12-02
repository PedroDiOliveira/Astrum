package handler

import (
	"astrum/internal/factory"
	"astrum/internal/model"
	"astrum/internal/repository"
	"fmt"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/mongo"
)

type PlanetHandler struct {
	planetRepository *repository.PlanetRepository
	planetFactory    *factory.PlanetFactory
}

func NewPlanetHandler(client *mongo.Client) *PlanetHandler {
	return &PlanetHandler{
		planetRepository: repository.NewPlanetRepository(client, "Bodies", "planets"),
		planetFactory:    factory.NewPlanetFactory(),
	}
}

func (b *PlanetHandler) RegisterPlanet(c *fiber.Ctx) error {
	var model model.Planet
	c.BodyParser(&model)
	newPlanet := b.planetFactory.CreatePlanet(model.Name, model.Photo, model.Nickname, model.Color, model.Radius, model.Moons, model.DistanceSun, model.Gravity, model.YearDuration, model.DayDuration, model.Temperature)
	err := b.planetRepository.InsertPlanet(newPlanet)

	if err != nil {
		return err
	}

	return c.SendStatus(201)
}

func (b *PlanetHandler) EditPlanet(c *fiber.Ctx) error {
	var newModel model.Planet
	c.BodyParser(&newModel)

	err := b.planetRepository.UpdatePlanet(&newModel)
	if err != nil {
		return err
	}

	return c.SendStatus(200)
}

func (b *PlanetHandler) GetAllPlanets(c *fiber.Ctx) error {
	lista, err := b.planetRepository.GetAll()
	if err != nil {
		return err
	}
	if lista == nil {
		return fmt.Errorf("Failed to get planets!")
	}
	return c.JSON(lista)
}

func (b *PlanetHandler) GetPlanet(c *fiber.Ctx) error {
	name := c.Params("name")

	planet, err := b.planetRepository.GetSinglePlanet(name)
	if err != nil {
		return err
	}
	return c.JSON(planet)
}
