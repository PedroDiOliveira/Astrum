package repository

import (
	"astrum/internal/model"
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type ThemeRepository struct {
	collection *mongo.Collection
}

func NewThemeRepository(client *mongo.Client, name, collection string) *ThemeRepository {
	return &ThemeRepository{collection: client.Database(name).Collection(collection)}
}

func (t *ThemeRepository) GetAll() ([]model.Theme, error) {
	cursor, err := t.collection.Find(context.TODO(), bson.M{})
	if err != nil {
		return nil, err
	}

	var lista []model.Theme

	for cursor.Next(context.TODO()) {
		var model model.Theme
		cursor.Decode(&model)
		lista = append(lista, model)
	}
	return lista, nil
}
