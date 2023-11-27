<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
USE Illuminate\Support\Facades\DB;

class CreateTareasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tareas', function (Blueprint $table) {
            $table->id();
            $table->string("nombre");
            $table->string("contenido");
            $table->timestamp("fecha_limite");
            $table->unsignedBigInteger('id_grupo')->nullable();            
            $table->unsignedBigInteger('id_usuario')->nullable();    
            $table->timestamps();
            $table->foreign('id_usuario')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('id_grupo')->references('id')->on('grupos')->onDelete('cascade');
            $table->softDeletes();
        });

        
        DB::unprepared("
            CREATE TRIGGER log_insert_tarea AFTER INSERT ON tareas
            FOR EACH ROW
            BEGIN
	            INSERT INTO log(evento,tabla,fecha_hora,id_usuario) 
                VALUES ('Nueva tarea','tareas', now(), NEW.id_usuario);
            END"
        );

        DB::unprepared("
        CREATE TRIGGER log_update_tarea AFTER UPDATE ON tareas
        FOR EACH ROW
        BEGIN
            INSERT INTO log(evento, tabla, fecha_hora, id_usuario)
            VALUES ('Tarea modificada', 'tareas', NOW(), OLD.id_usuario);
        END
        ");

    


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tareas');
    }
}
