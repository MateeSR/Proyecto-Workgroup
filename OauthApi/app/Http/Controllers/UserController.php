<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Lcobucci\JWT\Parser;
use Illuminate\Support\Facades\Validator;



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
        return $user;
    }

    public function validarToken(Request $request){
        return auth('api')->user();
    }

    public function logout(Request $request){
        $request->user()->token()->revoke();
        return ['message' => 'Token Revoked'];
        
        
    }











}


