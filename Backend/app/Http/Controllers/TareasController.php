<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Tarea;
use App\Models\Grupo;
use App\Jobs\JobEmail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;


class TareasController extends Controller
{
    public function obtenerIdUsuario(Request $request) {

        $tokenHeader = [ "Authorization" => $request -> header("Authorization")];
        $response = Http::withHeaders($tokenHeader)->get(getenv("API_AUTH_URL") . "/validate");
        $userData = $response->json();
        return $userData;

    }

    public function crearTarea(request $request) {
        
        $userData = $this->obtenerIdUsuario($request);

        $tarea = new Tarea();
        $tarea->nombre = $request->nombre;
        $tarea->id_grupo = $request->id_grupo;
        $tarea->id_usuario = $userData['id'];

        $tarea->contenido = $request->contenido;
        $tarea->fecha_limite = $request->fecha_limite;
        $tarea->save();


        return $tarea;    
    }

    public function enviarACorreo(Request $request){
        $userData = $this->obtenerIdUsuario($request);

        $emailJob = new JobEmail(
            'proyecto-workgroup@workgroup.com',
            $userData['email'],
            'Se ha creado una nueva tarea'
        );

        $this->dispatch($emailJob);

        return [ 'status' => 'success'];

    }


    public function listarTareas (Request $request) {
        return Tarea::all();
    }

    public function listarUnaTarea (Request $request, $idTarea) {
        return Tarea::findOrFail($idTarea);
    }

    public function modificarTarea (Request $request, $idTarea) {
        $userData = $this->obtenerIdUsuario($request);


        $tarea = Tarea::findOrFail($idTarea);
        $tarea->nombre = $request->nombre;
        $tarea->id_grupo = $request->id_grupo;
        $tarea->contenido = $request->contenido;
        $tarea->fecha_limite = $request->fecha_limite;
        $tarea->id_usuario = $userData['id'];

        $tarea->save();
        return $tarea;
    }
    public function borrarTarea (Request $request, $idTarea) {
        $tarea = Tarea::findOrFail($idTarea);
        $tarea->delete();

    }
    public function obtenerTareasDeGrupo($idGrupo){
    $grupo = Grupo::find($idGrupo);

    $tareas = $grupo->tareas;


    return $tareas;
   
}
    public function obtenerTareasDelUsuario(Request $request) {
        $userData = $this->obtenerIdUsuario($request);
    
        $tareas = DB::table('tareas')
        ->join('grupos', 'tareas.id_grupo', '=', 'grupos.id')
        ->join('integras', 'grupos.id', '=', 'integras.id_grupo')
        ->where('integras.id_usuario', $userData['id'])
        ->select('tareas.*')
        ->get();


        return $tareas;

    }

}
