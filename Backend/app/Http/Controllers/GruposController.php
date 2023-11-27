<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Grupo;
use App\Models\User;
use App\Models\Integra;
use Illuminate\Support\Facades\Http;

class GruposController extends Controller

{

    public function obtenerIdUsuario(Request $request) {

        $tokenHeader = [ "Authorization" => $request -> header("Authorization")];
        $response = Http::withHeaders($tokenHeader)->get(getenv("API_AUTH_URL") . "/validate");
        $userData = $response->json();
        return $userData['id'];

    }  

    public function crearGrupo(Request $request) {
        $grupo = new Grupo();

        $grupo->nombre = $request->nombre;
        $grupo->descripcion = $request->descripcion;

        $grupo->save();

        return $grupo;
    }

    public function modificarGrupo(Request $request, $idGrupo) {
        $grupo = Grupo::findOrFail($idGrupo);

        $grupo->nombre = $request->nombre;
        $grupo->descripcion = $request->descripcion;

        $grupo->save();

        return $grupo;

    }

    public function borrarGrupo(Request $request, $idGrupo) {
        $grupo = Grupo::findOrFail($idGrupo);

        $grupo->delete();
    }

    public function listarGrupos (Request $request) {
        return Grupo::all();
    }

    public function listarUnGrupo (Request $request, $idGrupo) {
        return Grupo::findOrFail($idGrupo);

    }


    public function obtenerGruposDeUsuario(Request $request) {
        $userId = $this->obtenerIdUsuario($request);

        $usuario = User::find($userId);
    
        
        $grupos = $usuario->grupos;
   
        return $grupos;
        
        }
   
}
