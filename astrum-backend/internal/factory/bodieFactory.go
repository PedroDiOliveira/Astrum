package factory

import (
	"astrum/internal/model"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type BodieFactory struct{}

func NewBodieFactory() *BodieFactory {
	return &BodieFactory{}
}

func (bodieF *BodieFactory) CreateBodie(name string, moons []string, distanceSun, gravity, yearDuration, dayDuration, temperature float64, photo []byte) *model.Bodie {
	return &model.Bodie{
		Name:         name,
		DistanceSun:  distanceSun,
		Moons:        moons,
		Gravity:      gravity,
		YearDuration: yearDuration,
		DayDuration:  dayDuration,
		Temperature:  temperature,
		Photo:        photo,
		IdBodie:      primitive.NewObjectID(),
	}
}
