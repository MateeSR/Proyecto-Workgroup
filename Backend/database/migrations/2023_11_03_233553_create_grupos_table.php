<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateGruposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grupos', function (Blueprint $table) {
            $table->id();
            $table->string("nombre");
            $table->string("descripcion");
            $table->timestamps();
            $table->softDeletes();
        });

        DB::unprepared("
        CREATE TRIGGER log_insert_grupos AFTER INSERT ON grupos
        FOR EACH ROW
        BEGIN
            INSERT INTO log(evento,tabla,fecha_hora) 
            VALUES ('Nuevo grupo','grupos', now());
        END"
        );

        DB::unprepared("
        CREATE TRIGGER log_update_grupos AFTER UPDATE ON grupos
        FOR EACH ROW
        BEGIN
            INSERT INTO log(evento,tabla,fecha_hora) 
            VALUES ('Modificacion de grupo','grupos', now());
        END"
        );

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grupos');
    }
}
