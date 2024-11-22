package api

import (
	"astrum/internal/handler"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"go.mongodb.org/mongo-driver/mongo"
)

func SetupRoutes(client *mongo.Client) {

	//Inicialize fiber
	app := fiber.New()

	//Allow CORS methods
	app.Use(cors.New())

	//////////////////////
	//Planet`s endpoints//
	//////////////////////

	planet := app.Group("/planet")

	//Declare variable that allow endpoints to user planet related functions
	planetHandler := handler.NewPlanetHandler(client)

	planet.Post("/new", planetHandler.RegisterPlanet)
	planet.Put("/update", planetHandler.EditPlanet)
	planet.Get("/", planetHandler.GetAllPlanets)
	planet.Get(":name", planetHandler.GetPlanet)

	//Set port to api listening TODO: .ENV configurantion
	app.Listen(":8080")
}
