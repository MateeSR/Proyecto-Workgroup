<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UsuarioTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    private $campos = [
        "id",
        "nombre",
        "apellido",
        "acercademi",
        "cumpleanos",
        "email",
        "password",
        "created_at",
        "updated_at",
        "deleted_at"
    ];

    public function test_ListarUsuarios()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> get('/api/v1/users');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            "*" => array_diff($this->campos, ['password'])
        ]);
    }

    public function test_BuscarUsuarioExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"]) 
                    -> get('/api/v1/user/1');

        $response->assertStatus(200);
        $response->assertJsonStructure($this -> campos);
    }


 public function test_BuscarPersonaNoExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> get('/api/v1/user/1000');

        $response->assertStatus(404);
        $response->assertJsonFragment([
            "message" => "No query results for model [App\\Models\\User] 1000"
        ]);

    }

    public function test_CrearPersona()
    {
        $datosParaInsertar = [
            "nombre" => "Roberto",
            "apellido" => "Gomez",
            "acercademi" => "Soy el chavo",
            "email" => "elchavodel8@gmail.com",
            "password" => "Soyelchavo1234"
        ];
        $campos = [
            "id",
            "nombre",
            "apellido",
            "acercademi",
            "cumpleanos",
            "email",
            "password",
            "created_at",
            "updated_at",
            "deleted_at"
        ];

        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> post('/api/v1/user',$datosParaInsertar);

        $response->assertStatus(201);
        $response->assertJsonStructure($campos);
        $response->assertJsonFragment($datosParaInsertar);

        $this->assertDatabaseHas('users', $datosParaInsertar); 

    }

    public function test_EliminarUsuarioExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> delete('/api/v1/user/1');

        $response->assertStatus(200);
        $response->assertJsonFragment([
            "message" => "Usuario eliminado"
        ]);
        $this->assertDatabaseMissing("users",[
            "id" => 3,
            "deleted_at" => null
        ]);
    }

    public function test_EliminarUsuarioNoExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> delete('/api/v1/user/1000');

        $response->assertStatus(404);
        $response->assertJsonFragment([
            "message" => "No query results for model [App\\Models\\User] 1000"
        ]);
    }

    public function test_ModificarUsuarioExistente(){
        $datosParaModificar = [
            "nombre" => "Jose",
            "apellido" => "Gomez"
        ];

        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> put('/api/v1/user/1',$datosParaModificar);

        $response->assertStatus(200);
        $response->assertJsonStructure($this->campos);
        $response->assertJsonFragment($datosParaModificar);




    }

    public function test_ModificarUsuarioNoExistente(){
        $datosParaModificar = [
            "nombre" => "Jose",
            "apellido" => "Gomez"
        ];

        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> put('/api/v1/persona/1000',$datosParaModificar);

        $response->assertStatus(404);
        $response->assertJsonFragment([
            "message" => "No query results for model [App\\Models\\User] 1000"
        ]);
    }
}



