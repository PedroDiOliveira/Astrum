package repository

import (
	"astrum/internal/model"
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type BodieRepository struct {
	collection *mongo.Collection
}

func NewBodyRepository(client *mongo.Client, name, collection string) *BodieRepository {
	return &BodieRepository{collection: client.Database(name).Collection(collection)}
}

func (b *BodieRepository) InsertBodie(bodie *model.Bodie) error {
	colletion := b.collection
	_, err := colletion.InsertOne(context.TODO(), bodie)

	if err != nil {
		return err
	}
	return nil
}

func (b *BodieRepository) FindBodie(bodie string) (error, *model.Bodie) {
	collection := b.collection
	var model *model.Bodie
	err := collection.FindOne(context.TODO(), bodie).Decode(&model)

	if err != nil {
		return err, nil
	}
	return nil, model
}

func (b *BodieRepository) UpdateBodie(model *model.Bodie) error {
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
			bson.M{"_id": model.IdBodie},
			bson.M{"$set": updateFields},
		)
		if err != nil {
			return err
		}
	}

	return nil
}

func (b *BodieRepository) GetAll() ([]model.Bodie, error) {
	cursor, err := b.collection.Find(context.TODO(), bson.M{})
	if err != nil {
		return nil, err
	}

	var lista []model.Bodie

	for cursor.Next(context.TODO()) {
		var model model.Bodie
		cursor.Decode(&model)
		lista = append(lista, model)
	}
	return lista, nil
}

func (b *BodieRepository) GetSingleBodie(name string) (*model.Bodie, error) {
	bodie := b.collection.FindOne(context.TODO(), bson.M{"name": name})

	var model model.Bodie
	bodie.Decode(&model)
	return &model, nil
}
