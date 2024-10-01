package repository

import (
	"astrum/internal/model"
	"context"

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
	_, err := b.collection.UpdateOne(
		context.TODO(),
		bson.M{"_id": model.IdBodie},
		bson.M{"$set": bson.M{
			"name":         model.Name,
			"distancesun":  model.DistanceSun,
			"moons":        model.Moons,
			"gravity":      model.Gravity,
			"yearduration": model.YearDuration,
			"dayduration":  model.DayDuration,
			"temperature":  model.Temperature,
			"photo":        model.Photo,
		}})
	if err != nil {
		return err
	}
	return nil
}
