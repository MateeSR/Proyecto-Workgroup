<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\JobEmail;

class EmailController extends Controller
{
    

    public function enviarTarea(Request $request)
    {
        $emailJob = new JobEmail(
            $request -> post("from"),
            $request -> post("to"),
            $request -> post("subject")
        );
        
        $this->dispatch($emailJob);
    }
}
