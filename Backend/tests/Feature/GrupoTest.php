<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;


class GrupoTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    use WithoutMiddleware;


     private $campos = [
        "id",
        "nombre",
        "descripcion",
        "created_at",
        "updated_at",
        "deleted_at"
    ];


    public function test_ListarGrupos()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> get('/api/v1/grupo');

        $response->assertStatus(200);
        $response->assertJsonStructure([
             "*" => $this -> campos
        ]);
    }

    public function test_BuscarGrupoExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"]) 
                    -> get('/api/v1/grupo/1');

        $response->assertStatus(200);
        $response->assertJsonStructure($this -> campos);
    }

    public function test_BuscarGrupoNoExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> get('/api/v1/grupo/1000');

        $response->assertStatus(404);
        $response->assertJsonFragment([
            "message" => "No query results for model [App\\Models\\Grupo] 1000"
        ]);

    }

    public function test_CrearGrupo()
    {
        $datosParaInsertar = [
            "nombre" => "EL grupo de los pibe",
            "descripcion" => "Alto grupo"
        ];
        $campos = [
            "id",
            "nombre",
            "descripcion",
            "created_at",
            "updated_at",
        ];

        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> post('/api/v1/grupo',$datosParaInsertar);

        $response->assertStatus(201);
        $response->assertJsonStructure($campos);
        $response->assertJsonFragment($datosParaInsertar);

        $this->assertDatabaseHas('grupos', $datosParaInsertar); 

    }

    public function test_EliminarGrupoExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> delete('/api/v1/grupo/4');

        $response->assertStatus(200);
       
        $this->assertDatabaseMissing("grupos",[
            "id" => 8,
            "deleted_at" => null
        ]);
    }

    public function test_EliminarGrupoNoExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> delete('/api/v1/grupo/1000');

        $response->assertStatus(404);
        $response->assertJsonFragment([
            "message" => "No query results for model [App\\Models\\Grupo] 1000"
        ]);
    }

    public function test_ModificarGrupoExistente(){
        $datosParaModificar = [
            "nombre" => "El grupo de los pibardos",
            "descripcion" => "ashe"
        ];

        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> put('/api/v1/grupo/3',$datosParaModificar);

        $response->assertStatus(200);
        $response->assertJsonStructure($this->campos);
        $response->assertJsonFragment($datosParaModificar);




    }

    public function test_ModificarGrupoNoExistente(){
        $datosParaModificar = [
            "nombre" => "El grupo de los pibardos",
            "descripcion" => "ashe"
        ];

        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> put('/api/v1/grupo/1000',$datosParaModificar);

        $response->assertStatus(404);
        $response->assertJsonFragment([
            "message" => "No query results for model [App\\Models\\Grupo] 1000"
        ]);
    }
}
