<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Tarea;


class TareasController extends Controller
{
    public function crearTarea(request $request) {
        $tarea = new Tarea();
        $tarea->nombre = $request->nombre;
        $tarea->grupo = $request->grupo;
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
        $tarea = Tarea::findOrFail($idTarea);
        $tarea->nombre = $request->nombre;
        $tarea->grupo = $request->grupo;
        $tarea->contenido = $request->contenido;
        $tarea->fecha_limite = $request->fecha_limite;
        $tarea->save();
        return $tarea;
    }
    public function borrarTarea (Request $request, $idTarea) {
        $tarea = Tarea::findOrFail($idTarea);
        $tarea->delete();

    }













}
