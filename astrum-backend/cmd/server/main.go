package main

import (
	"astrum/cmd/server/database"
	"astrum/internal/api"
)

func main() {
	client := database.MongoConnect()
	api.SetupRoutes(client)

}
