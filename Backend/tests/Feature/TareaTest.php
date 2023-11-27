<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;


class TareaTest extends TestCase
{
    use WithoutMiddleware;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    private $campos = [
        "id",
        "nombre",
        "contenido",
        "fecha_limite",
        "id_usuario",
        "id_grupo",
        "created_at",
        "updated_at",
        "deleted_at"
    ];


    public function setUp(): void
    {
        parent::setUp();
    
        Http::fake([
            getenv("API_AUTH_URL") . "/validate" => Http::response(['id' => 1], 200),
        ]);
    }



    public function test_ListarTareas()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> get('/api/v1/tarea');

        $response->assertStatus(200);
        $response->assertJsonStructure([
             "*" => $this -> campos
        ]);
    }
    public function test_BuscarTareaExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"]) 
                    -> get('/api/v1/tarea/3');

        $response->assertStatus(200);
        $response->assertJsonStructure($this -> campos);
    }

    public function test_BuscarTareaNoExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> get('/api/v1/tarea/1000');

        $response->assertStatus(404);
        $response->assertJsonFragment([
            "message" => "No query results for model [App\\Models\\Tarea] 1000"
        ]);

    }

    public function test_CrearTarea()
    { 
        $datosParaInsertar = [
            "nombre" => "Tarea de ciencia",
            "contenido" => "Hagan la tarea de ciencia para mañana",
            "fecha_limite" => "2017-07-23",
            "id_usuario" => "1",
            "id_grupo" => "1"
        ];
        $campos = [
            "id",
            "nombre",
            "contenido",
            "fecha_limite",
            "id_usuario",
            "id_grupo",
            "created_at",
            "updated_at",
            "deleted_at"
        ];

        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> post('/api/v1/tarea', $datosParaInsertar);



        $response->assertStatus(201);
        $response->assertJsonStructure($campos);
        $response->assertJsonFragment($datosParaInsertar);

        $this->assertDatabaseHas('tareas', $datosParaInsertar); 


        Http::assertNothingSent();

    }

    public function test_EliminarTareaExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> delete('/api/v1/tarea/4');

        $response->assertStatus(200);
        $this->assertDatabaseMissing("tareas",[
            "id" => 4,
            "deleted_at" => null
        ]);
    }

    public function test_EliminarTareaNoExistente()
    {
        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> delete('/api/v1/tarea/1000');

        $response->assertStatus(404);
        $response->assertJsonFragment([
            "message" => "No query results for model [App\\Models\\Tarea] 1000"
        ]);
    }

    public function test_ModificarTareaExistente(){
        $datosParaModificar = [
            "nombre" => "Tarea de ciencia",
            "contenido" => "Alta tarea"
        ];

        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> put('/api/v1/tarea/1',$datosParaModificar);

        $response->assertStatus(200);
        $response->assertJsonStructure($this->campos);
        $response->assertJsonFragment($datosParaModificar);




    }

    public function test_ModificarTareaNoExistente(){
        $datosParaModificar = [
            "nombre" => "Tarea de ciencia",
            "contenido" => "Alta tarea"
        ];

        $response = $this
                    -> withHeaders(["Accept" => "application/json"])
                    -> put('/api/v1/tarea/1000',$datosParaModificar);

        $response->assertStatus(404);
        $response->assertJsonFragment([
            "message" => "No query results for model [App\\Models\\Tarea] 1000"
        ]);
    }

  

}
