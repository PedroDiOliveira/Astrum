package model

type Theme struct {
	Name  string `json:"name,omitempty" bson:"name,omitempty"`
	Photo string `json:"photo,omitempty" bson:"photo,omitempty"`
}
