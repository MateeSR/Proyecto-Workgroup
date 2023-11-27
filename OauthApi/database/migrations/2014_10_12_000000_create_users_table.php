<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellido');
            $table->string('acercademi')->nullable();;
            $table->timestamp('cumpleanos')->nullable();;
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        DB::unprepared("
        CREATE TRIGGER log_insert_usuario AFTER INSERT ON users
        FOR EACH ROW
        BEGIN
            INSERT INTO log(evento,tabla,fecha_hora,id_usuario) 
            VALUES ('Registro de usuario','users', now(), NEW.id);
        END"
        );

        DB::unprepared("
        CREATE TRIGGER log_update_usuario AFTER UPDATE ON users
        FOR EACH ROW
        BEGIN
            INSERT INTO log(evento, tabla, fecha_hora, id_usuario)
            VALUES ('Modificacion de usuario', 'users', now(), NEW.id);
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
        Schema::dropIfExists('users');
    }
}
