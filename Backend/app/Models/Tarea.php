<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Grupo;

class Tarea extends Model
{
    use HasFactory, SoftDeletes;


    public function grupo()
    {
        return $this->belongsTo(Grupo::class, 'id_grupo');
    }
}
