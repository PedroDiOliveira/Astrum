package api

import (
	"astrum/internal/handler"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/mongo"
)

func SetupRoutes(client *mongo.Client) {
	app := fiber.New()

	bodie := app.Group("/bodie")

	bodieHandler := handler.NewBodieHandler(client)

	bodie.Post("/new", bodieHandler.CadasterBodie)

	bodie.Put("/update", bodieHandler.EditBodie)

	bodie.Get("/planets", bodieHandler.GetAllBodies)

	bodie.Get("/planets/:name", bodieHandler.GetBodie)

	app.Listen(":8080")
}
