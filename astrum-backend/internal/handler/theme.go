package handler

import (
	"astrum/internal/repository"
	"fmt"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/mongo"
)

type ThemeHandler struct {
	themeRepository *repository.ThemeRepository
}

func NewThemeHandler(client *mongo.Client) *ThemeHandler {
	return &ThemeHandler{
		themeRepository: repository.NewThemeRepository(client, "Bodies", "themes"),
	}
}

func (t *ThemeHandler) GetAllThemes(c *fiber.Ctx) error {
	lista, err := t.themeRepository.GetAll()
	if err != nil {
		return err
	}
	if lista == nil {
		return fmt.Errorf("Failed to get themes!")
	}
	return c.JSON(lista)
}
