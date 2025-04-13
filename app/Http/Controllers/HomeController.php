<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Annonce;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class HomeController extends Controller implements HasMiddleware
{

    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['index' , 'show'])
        ];
    }


    public function index()
    {
        $annonces = Annonce::all();
        return response()->json([
            'data' => $annonces
        ]);
    }


    public function show(Annonce $annonce)
    {
        return response()->json([ 'data' => $annonce ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone_number' => 'required|string|max:20',
            'event_description' => 'nullable|string',
            'event_type' => 'nullable|string|max:255',
            'event_date_time' => 'nullable|date',
            'event_location' => 'nullable|string|max:255',
            'expected_participants' => 'nullable|integer',
            'budget' => 'nullable|numeric',
            'services_required' => 'nullable|string',
            'website' => 'nullable|url|max:255',
            'social_media_links' => 'nullable|string',
        ]);

        $data = $request->all();
        $data['user_id'] = auth()->id();

        $annonce = Annonce::create($data);

        return response() ->json([
            'message' => 'Annonce created successfuly.',
            'data' => $annonce
        ], 201);
    }



    public function update(Request $request, Annonce $annonce)
    {
        if ($annonce->user_id !== auth()->id()){
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone_number' => 'required|string|max:20',
            'event_description' => 'nullable|string',
            'event_type' => 'nullable|string|max:255',
            'event_date_time' => 'nullable|date',
            'event_location' => 'nullable|string|max:255',
            'expected_participants' => 'nullable|integer',
            'budget' => 'nullable|numeric',
            'services_required' => 'nullable|string',
            'website' => 'nullable|url|max:255',
            'social_media_links' => 'nullable|string',
        ]);

        $annonce->update($request->all());

        return response()->json([
            'message' => "Annonce Updated Successfully.",
            'data' => $annonce
        ]);
    }


    public function destroy(Annonce $annonce)
    {
        if ($annonce->user_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $annonce->delete();

        return response()->json([
            'message' => 'Annonce deleted successfully.'
        ], 200);
    }
}
