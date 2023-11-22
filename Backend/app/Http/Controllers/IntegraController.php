<?php

namespace App\Http\Controllers;

use App\Models\Grupo;
use App\Models\Integras;
use App\Models\User;
use Illuminate\Http\Request;


class IntegraController extends Controller
{
    public function añadirMiembro (Request $request, $id_grupo) {
        $integras = new Integras();
        $grupo = Grupo::findOrFail($id_grupo);

        $integras->id_grupo = $grupo->id;
        
        $integras->id_usuario = $request->id_usuario;


        $integras->save();
        $grupo->users()->attach($request->id_usuario);



    }
    
    public function obtenerUsuariosDelGrupo($id_grupo) {
        $usuarios = User::join('integras', 'users.id', '=', 'integras.id_Usuario')
        ->where('integras.id_grupo', $id_grupo)
        ->get();


        return $usuarios;
    }
}
