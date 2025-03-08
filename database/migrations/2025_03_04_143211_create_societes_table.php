<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('societes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('email');
            $table->string('phone_number');
            $table->string('website')->nullable();
            $table->text('description');
            $table->text('services_offered');
            $table->text('event_types');
            $table->integer('min_participants')->nullable();
            $table->integer('max_participants')->nullable();
            $table->boolean('custom_events')->default(false);
            $table->text('payment_methods')->nullable();
            $table->boolean('free_consultation')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('societes');
    }
};
