# Astrum

### Description

**astrum-backend** is a backend application designed to provide data about celestial planets within our solar system. This API delivers information such as the characteristics, classifications, and curiosities of planets, moons, and other celestial objects. The data will be consumed by the frontend application of Astrum, allowing users to explore and learn about these planets.

This backend is developed using **Golang** and the **Fiber** framework, and it integrates with a **MongoDB** database to store and manage celestial body data.

In this README, you will find instructions for setting up, running, and using the Astrum backend API.

## Prerequisites

To set up and run the Astrum backend, ensure the following prerequisites are met:

* **Go:**  
  Verify the installed version by running `go version`. If you need to install or update Go, download the latest version from [https://go.dev/dl/](https://go.dev/dl/).

* **MongoDB:**  
  Ensure that MongoDB is online. You can either use a local MongoDB instance or set up a cloud database through MongoDB Atlas.

* **Code Editor:**  
  It is recommended to use a code editor that supports Go development, such as **Visual Studio Code**. You can download it from [https://code.visualstudio.com/](https://code.visualstudio.com/).


## Installation and Execution

Follow these steps to install and run the Astrum backend:

1. **Clone the Repository:**
   Begin by cloning the Astrum repository to your local machine:
   ```bash
     git clone https://github.com/PedroDiOliveira/Astrum.git
     cd Astrum
2. **Install Dependencies:**
   Ensure that all necessary Go modules are installed
  ```bash
     go mod tidy
```
3. **Build the Application:**
   To compile the Go code, run
  ```bash
     go build ./cmd/server/main.go
```
4. **Run the Application:**
   After building the application, you can start the server by running:
```bash
    ./main
