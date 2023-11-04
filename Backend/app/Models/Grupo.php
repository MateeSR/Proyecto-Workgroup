<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use OauthApi\App\Models\User;
use App\Models\Tarea;
use Illuminate\Database\Eloquent\SoftDeletes;

class Grupo extends Model
{
    use HasFactory, SoftDeletes;



    protected $primaryKey = 'id_grupo';

    public function users()
    {
        return $this->belongsToMany(User::class, 'integran', 'id_grupo', 'id_usuario');
    }

    public function tareas()
    {
        return $this->hasMany(Tarea::class, 'id_grupo');
    }


}
