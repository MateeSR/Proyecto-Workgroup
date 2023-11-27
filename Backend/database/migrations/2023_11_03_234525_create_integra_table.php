<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateIntegraTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('integras', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_usuario');
            $table->unsignedBigInteger('id_grupo');
            $table->foreign('id_usuario')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('id_grupo')->references('id')->on('grupos')->onDelete('cascade');
            $table->timestamps();
            $table->unique(['id_usuario', 'id_grupo']);

        });

        DB::unprepared("
        CREATE TRIGGER log_insert_integras AFTER INSERT ON integras
        FOR EACH ROW
        BEGIN
            DECLARE mensaje_evento VARCHAR(255);

            SET mensaje_evento = CONCAT('Se integra un nuevo usuario en grupo (ID Grupo: ', NEW.id_grupo, ')');

            INSERT INTO log(evento,tabla,fecha_hora,id_usuario) 
            VALUES (mensaje_evento,'integras', now(), NEW.id_usuario);
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
        Schema::dropIfExists('integra');
    }
}
