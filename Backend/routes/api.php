<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TareasController;
use App\Http\Controllers\GruposController;
use Illuminate\Support\Facades\Auth;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::prefix('v1')->group(function(){
    Route::get("/tarea",[TareasController::class, "listarTareas"]);
    Route::get("/tarea/{id}",[TareasController::class, "listarUnaTarea"]);
    Route::post("/tarea",[TareasController::class, "crearTarea"]);
    Route::delete("/tarea/{id}",[TareasController::class, "borrarTarea"]);
    Route::put("/tarea/{id}",[TareasController::class, "modificarTarea"]);

    Route::get("/grupo", [GruposController::class, "listarGrupos"]);
    Route::get("/grupo/{id}", [GruposController::class, "listarUnGrupo"]);
    Route::post("/grupo",[GruposController::class, "crearGrupo"]);
    Route::delete("/grupo/{id}",[GruposController::class, "borrarGrupo"]);
    Route::put("/grupo/{id}",[GruposController::class, "modificarGrupo"]);

});

