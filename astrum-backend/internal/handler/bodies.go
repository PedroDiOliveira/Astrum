package handler

import (
	"astrum/internal/factory"
	"astrum/internal/model"
	"astrum/internal/repository"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/mongo"
)

type BodieHandler struct {
	bodieRepository *repository.BodieRepository
	bodieFactory    *factory.BodieFactory
}

func NewBodieHandler(client *mongo.Client) *BodieHandler {
	return &BodieHandler{
		bodieRepository: repository.NewBodyRepository(client, "Bodies", "bodies"),
		bodieFactory:    factory.NewBodieFactory(),
	}
}

func (b *BodieHandler) CadasterBodie(c *fiber.Ctx) error {
	var model model.Bodie
	c.BodyParser(&model)
	newBodie := b.bodieFactory.CreateBodie(model.Name, model.Radius, model.Moons, model.DistanceSun, model.Gravity, model.YearDuration, model.DayDuration, model.Temperature, model.Photo)
	err := b.bodieRepository.InsertBodie(newBodie)

	if err != nil {
		return err
	}

	return c.SendStatus(201)
}

func (b *BodieHandler) EditBodie(c *fiber.Ctx) error {
	var newModel model.Bodie
	c.BodyParser(&newModel)

	err := b.bodieRepository.UpdateBodie(&newModel)
	if err != nil {
		return err
	}

	return c.SendStatus(200)
}

func (b *BodieHandler) GetAllBodies(c *fiber.Ctx) error {
	lista, err := b.bodieRepository.GetAll()
	if err != nil {
		return err
	}
	return c.JSON(lista)
}

func (b *BodieHandler) GetBodie(c *fiber.Ctx) error {
	name := c.Params("name")

	bodie, err := b.bodieRepository.GetSingleBodie(name)
	if err != nil {
		return err
	}
	return c.JSON(bodie)
}
