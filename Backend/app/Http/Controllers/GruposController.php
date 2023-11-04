<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Grupo;

class GruposController extends Controller
{
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


}
