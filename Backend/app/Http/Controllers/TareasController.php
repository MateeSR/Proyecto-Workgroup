<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Tarea;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class TareasController extends Controller
{
    public function obtenerIdUsuario(Request $request) {

        $tokenHeader = [ "Authorization" => $request -> header("Authorization")];
        $response = Http::withHeaders($tokenHeader)->get(getenv("API_AUTH_URL") . "/validate");
        $userData = $response->json();
        return $userData['id'];

    }

    public function crearTarea(request $request) {
        $userId = $this->obtenerIdUsuario($request);

        $tarea = new Tarea();
        $tarea->nombre = $request->nombre;
        $tarea->id_grupo = $request->id_grupo;
        $tarea->id_usuario = $userId;

        $tarea->contenido = $request->contenido;
        $tarea->fecha_limite = $request->fecha_limite;
        $tarea->save();
        return $tarea;    
    }

    public function listarTareas (Request $request) {
        return Tarea::all();
    }

    public function listarUnaTarea (Request $request, $idTarea) {
        return Tarea::findOrFail($idTarea);
    }

    public function modificarTarea (Request $request, $idTarea) {
        $userId = $this->obtenerIdUsuario($request);


        $tarea = Tarea::findOrFail($idTarea);
        $tarea->nombre = $request->nombre;
        $tarea->id_grupo = $request->id_grupo;
        $tarea->contenido = $request->contenido;
        $tarea->fecha_limite = $request->fecha_limite;
        $tarea->id_usuario = $userId;

        $tarea->save();
        return $tarea;
    }
    public function borrarTarea (Request $request, $idTarea) {
        $tarea = Tarea::findOrFail($idTarea);
        $tarea->delete();

    }

}
