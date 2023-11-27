<?php

namespace Database\Seeders;

use App\Models\Roles;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $adminRole = Roles::firstOrCreate(['rol' => 'admin']);

        $adminUser = User::create([
            'nombre' => 'EL ADMIN',
            'apellido' => 'El PROPIO',
            'email' => 'eladmin@gmail.com',
            'password' => Hash::make('1234'),
        ]);

        $adminUser->roles()->attach($adminRole->id);
    }
}
