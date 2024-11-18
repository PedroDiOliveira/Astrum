package factory

import (
	"astrum/internal/model"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type PlanetFactory struct{}

func NewPlanetFactory() *PlanetFactory {
	return &PlanetFactory{}
}

func (planetF *PlanetFactory) CreatePlanet(name string, radius float64, moons []string, distanceSun, gravity, yearDuration, dayDuration, temperature float64, photo string) *model.Planet {
	return &model.Planet{
		Name:         name,
		Radius:       radius,
		DistanceSun:  distanceSun,
		Moons:        moons,
		Gravity:      gravity,
		YearDuration: yearDuration,
		DayDuration:  dayDuration,
		Temperature:  temperature,
		Photo:        photo,
		IdPlanet:     primitive.NewObjectID(),
	}
}
