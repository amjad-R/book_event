<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class EventController extends Controller implements HasMiddleware
{


    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['index', 'show'])
        ];
    }


    public function index()
    {
        $events = Event::all();
        return response()->json(['data' => $events]);
    }



    public function show(Event $event)
    {
        return response()->json(['data' => $event]);
    }



    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'email' => 'required|email',
            'phone_number' => 'required|string',
            'services_offered' => 'required|string',
            'event_date_time' => 'required|date_format:Y-m-d H:i:s',
            'location' => 'required|string',
            'images' => 'nullable|string',
            'expected_participants' => 'nullable|integer',
            'budget' => 'nullable|numeric',
            'services_required' => 'nullable|string',
            'website_link' => 'nullable|url',
            'event_types' => 'required|string',
            'min_participants' => 'nullable|integer',
            'max_participants' => 'nullable|integer',
            'custom_events' => 'boolean',
            'payment_methods' => 'nullable|string',
            'free_consultation' => 'boolean',
            'social_media_links' => 'nullable|string',
        ]);

        $event = Event::create([
            'user_id' => Auth::id(),
            ...$validated
        ]);

        return response()->json([
            'message' => 'Event created successfully!',
            'data' => $event
        ], 201);
    }



    public function update(Request $request, Event $event)
    {
        if ($event->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'email' => 'sometimes|email',
            'phone_number' => 'sometimes|string',
            'services_offered' => 'sometimes|string',
            'event_date_time' => 'sometimes|date_format:Y-m-d H:i:s',
            'location' => 'sometimes|string',
            'images' => 'nullable|string',
            'expected_participants' => 'nullable|integer',
            'budget' => 'nullable|numeric',
            'services_required' => 'nullable|string',
            'website_link' => 'nullable|url',
            'event_types' => 'sometimes|string',
            'min_participants' => 'nullable|integer',
            'max_participants' => 'nullable|integer',
            'custom_events' => 'boolean',
            'payment_methods' => 'nullable|string',
            'free_consultation' => 'boolean',
            'social_media_links' => 'nullable|string',
        ]);

        $event->update($validated);

        return response()->json([
            'message' => 'Event updated successfully!',
            'data' => $event
        ]);
    }


    
    public function destroy(Event $event)
    {
        if ($event->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $event->delete();

        return response()->json([
            'message' => 'Event deleted successfully!'
        ], 204);
    }
}
