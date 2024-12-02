package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type Planet struct {
	Name         string             `json:"name,omitempty" bson:"name,omitempty"`
	Radius       float64            `json:"radius,omitempty" bson:"radius,omitempty"`
	DistanceSun  float64            `json:"distanceSun,omitempty" bson:"distanceSun,omitempty"`
	Moons        []string           `json:"moons,omitempty" bson:"moons,omitempty"`
	Gravity      float64            `json:"gravity,omitempty" bson:"gravity,omitempty"`
	YearDuration float64            `json:"yearDuration,omitempty" bson:"yearDuration,omitempty"`
	DayDuration  float64            `json:"dayDuration,omitempty" bson:"dayDuration,omitempty"`
	Temperature  float64            `json:"temperature,omitempty" bson:"temperature,omitempty"`
	Photo        string             `json:"photo,omitempty" bson:"photo,omitempty"`
	Nickname     string             `json:"nickname,omitempty" bson:"nickname,omitempty"`
	IdPlanet     primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
}
