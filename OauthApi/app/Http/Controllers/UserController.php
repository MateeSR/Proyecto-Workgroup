<?php

namespace App\Http\Controllers;

use App\Models\Roles;
use App\Http\Controllers\EmailController;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Lcobucci\JWT\Parser;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Laravel\Passport\Token;





class UserController extends Controller
{

    public function registro(Request $request){

        $validation = Validator::make($request->all(),[
            'nombre' => 'required|max:255',
            'apellido' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'c_password' => 'required|same:password'
        ]);

        if($validation->fails())
            return $validation->errors();

        return $this -> crearUsuario($request);
        
    }
    
   

    private function crearUsuario($request){
        $user = new User();
        $user -> nombre = $request -> post("nombre");
        $user -> apellido = $request -> post("apellido");
        $user -> email = $request -> post("email");
        $user -> password = Hash::make($request -> post("password"));   

        $user -> save();
        $user -> roles()->attach(Roles::where('rol', 'normal')->first());

        return $user;

    }

    public function modificarPerfil (Request $request, $idUsuario) {

        $user = User::findOrFail($idUsuario);

        $user -> nombre = $request -> nombre;
        $user -> apellido = $request -> apellido;
        $user -> cumpleanos = $request -> cumpleanos;
        $user -> acercademi = $request -> acercademi;
        $user -> save();
    
        return $user;
    }


    public function validarToken(){
        return auth('api')->user();

    }

    public function mostrarUsuarios() {
        $users = User::all();

        return $users;
    }

    public function logout(Request $request){
        $request->user()->token()->revoke();
        return ['message' => 'Token Revoked'];
               
    }


    public function obtenerRolUsuario() {
        $userId = Auth::id();
        $roles = User::find($userId)->roles()->pluck('rol');

        return $roles;



    }
    



}


