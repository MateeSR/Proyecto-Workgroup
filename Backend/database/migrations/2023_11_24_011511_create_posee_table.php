<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreatePoseeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posee', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_rol');
            $table->unsignedBigInteger('id_usuario');
            $table->timestamps();

            $table->foreign('id_rol')->references('id')->on('roles')->onDelete('cascade');
            $table->foreign('id_usuario')->references('id')->on('users')->onDelete('cascade');
        });


        DB::unprepared("
        CREATE TRIGGER log_insert_roles AFTER INSERT ON posee
        FOR EACH ROW
        BEGIN
            DECLARE mensaje_evento VARCHAR(255);

            IF NEW.id_rol 
            IN (SELECT id FROM roles WHERE rol IN ('admin', 'normal')) 
            THEN
                SET mensaje_evento = CONCAT('Se asigna el rol ', (SELECT rol FROM roles WHERE id = NEW.id_rol));

                INSERT INTO log(evento, tabla, fecha_hora, id_usuario) 
                VALUES (mensaje_evento, 'posee', NOW(), NEW.id_usuario);
            END 
            IF;
        END
            "
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posee');
    }
}
