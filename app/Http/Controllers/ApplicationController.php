<?php

namespace App\Http\Controllers;

use App\Models\Annonce;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApplicationController extends Controller
{
    public function store(Request $request, Annonce $annonce)
    {
        if (Auth::user()->role !== 'societe'){
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->validate([
            'email' => 'required|email',
            'location' => 'required|string',
            'price' => 'required|numeric',
            'message' => 'nullable|string',
        ]);

        $application = Application::create([
            'annonce_id' => $annonce->id,
            'societe_id' => Auth::id(),
            'email' => $request->email,
            'location' => $request->location,
            'price' => $request->price,
            'message' => $request->message,
        ]);

        return response()->json([
            'message' => 'Application submitted successfully.',
            'data' => $application
        ], 201);
    }

    //saved annonces from societe
    public function index()
    {
        if (Auth::user()->role !== 'societe'){
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $applications = Application::where('societe_id', Auth::id())->with('annonce')->get();

        return response()->json([
            'data' => $applications
        ]);
    }

    //list all societes to the user
    public function userApplications()
    {
        if (Auth::user()->role !== 'user') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $applications = Application::whereHas('annonce', function($query){
            $query->where('user_id', Auth::id());
        })->with('societe')->get();

        return response()->json([
            'data' => $applications
        ]);
    }
}
