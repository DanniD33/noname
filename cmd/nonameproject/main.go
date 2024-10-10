package main

import (
	"fmt"
	// "io"
	// "os"
	"net/http"
	"encoding/json"
	// "github.com/gin-gonic/gin"

	// "github.com/dannid33/noname"
)

// type album struct {
// 	ID     string  `json:"id"`
// 	Title  string  `json:"title"`
// 	Artist string  `json:"artist"`
// 	Price  float64 `json:"price"`
// }

// var albums = []album{
// {ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
// {ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
// {ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
// }

// type User {
// 	userName		string `json:username`
// 	passWRD			string `json:password`
// }


// type login struct {
	
// }

func main() {
	

	
// func getAlbums(c *gin.Context) {
// 	c.IndentedJSON(http.StatusOK, albums)
// }


// router := gin.Default()
// router.GET("/albums", getAlbums)

// router.Run("localhost:8080")


// http.HandleFunc("/api/data", func(w http.ResponseWriter, r *http.Request) {
// 	data := map[string]string{"message": "Hello from Go!"}
// 	json.NewEncoder(w).Encode(data)
// })

	http.HandleFunc("/greetings", func(w http.ResponseWriter, r *http.Request){
		// w.Write([]byte("hello world"))

		// data := map[string]string{"message": "Hello from Go!"}
		// json.NewEncoder(w).Encode(data)
		// file, handler, err := r.FormFile("formData")
		// if err != nil {
		// 	http.Error(w, "Error retrieving the file", http.StatusBadRequest)
		// 	return
		// }
		// defer file.Close()
	
		// // Create a new file on the server
		// f, err := os.Create("./uploads/" + handler.Filename)
		// if err != nil {
		// 	http.Error(w, "Error creating file", http.StatusInternalServerError)
		// 	return
		// }
		// defer f.Close()
	
		// // Copy the uploaded file to the new file
		// io.Copy(f, file)
	
		// fmt.Fprintf(w, "File uploaded successfully")


		if r.Method == "POST" {
			var data map[string]interface{}
			err := json.NewDecoder(r.Body).Decode(&data)
			if err != nil {
				http.Error(w, "Error decoding JSON", http.StatusBadRequest)
				return
			}
	
			// Process the form data
			fmt.Println("Received form data:", data)
	
			// Respond to the client
			w.WriteHeader(http.StatusOK)
			fmt.Fprintf(w, "Form data received successfully")
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}	

		// json.NewEncoder(w).Encode(data)

	})
	// router:= routes.newRouter()
	http.ListenAndServe(":8080", nil)
	// port:= 8080
	// addr:= fmt.Sprintf(":%d", port)
	fmt.Printf("server listening on htpp://localhost%s/n")
	// err := http.ListenAndServe(addr, router)
	// if err != nil {
	// 	panic(err)
	// }
}