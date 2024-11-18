package repository

import (
	"astrum/internal/model"
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type PlanetRepository struct {
	collection *mongo.Collection
}

func NewPlanetRepository(client *mongo.Client, name, collection string) *PlanetRepository {
	return &PlanetRepository{collection: client.Database(name).Collection(collection)}
}

func (b *PlanetRepository) InsertPlanet(planet *model.Planet) error {
	colletion := b.collection
	_, err := colletion.InsertOne(context.TODO(), planet)

	if err != nil {
		return err
	}
	return nil
}

func (b *PlanetRepository) FindPlanet(planet string) (error, *model.Planet) {
	collection := b.collection
	var model *model.Planet
	err := collection.FindOne(context.TODO(), planet).Decode(&model)

	if err != nil {
		return err, nil
	}
	return nil, model
}

func (b *PlanetRepository) UpdatePlanet(model *model.Planet) error {
	updateFields := bson.M{}
	// Verifica cada campo e só adiciona ao updateFields se não for nulo
	fmt.Println(model.Radius)
	if model.Name != "" {
		updateFields["name"] = model.Name
	}
	if model.DistanceSun != 0 {
		updateFields["distancesun"] = model.DistanceSun
	}
	if model.Radius != 0 {
		updateFields["radius"] = model.Radius
	}
	if model.Moons != nil {
		updateFields["moons"] = model.Moons
	}
	if model.Gravity != 0 {
		updateFields["gravity"] = model.Gravity
	}
	if model.YearDuration != 0 {
		updateFields["yearduration"] = model.YearDuration
	}
	if model.DayDuration != 0 {
		updateFields["dayduration"] = model.DayDuration
	}
	if model.Temperature != 0 {
		updateFields["temperature"] = model.Temperature
	}
	if len(model.Photo) > 0 { // Verifica se o array de bytes não está vazio
		updateFields["photo"] = model.Photo
	}

	// Realiza o update apenas com os campos não nulos
	if len(updateFields) > 0 {
		_, err := b.collection.UpdateOne(
			context.TODO(),
			bson.M{"_id": model.IdPlanet},
			bson.M{"$set": updateFields},
		)
		if err != nil {
			return err
		}
	}

	return nil
}

func (b *PlanetRepository) GetAll() ([]model.Planet, error) {
	cursor, err := b.collection.Find(context.TODO(), bson.M{})
	if err != nil {
		return nil, err
	}

	var lista []model.Planet

	for cursor.Next(context.TODO()) {
		var model model.Planet
		cursor.Decode(&model)
		lista = append(lista, model)
	}
	return lista, nil
}

func (b *PlanetRepository) GetSinglePlanet(name string) (*model.Planet, error) {
	planet := b.collection.FindOne(context.TODO(), bson.M{"name": name})

	var model model.Planet
	planet.Decode(&model)
	return &model, nil
}
