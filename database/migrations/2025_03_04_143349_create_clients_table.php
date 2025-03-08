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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('full_name');
            $table->string('email');
            $table->string('phone_number');
            $table->string('event_name');
            $table->text('event_description')->nullable();
            $table->string('event_type')->nullable();
            $table->dateTime('event_date_time')->nullable();
            $table->string('event_location')->nullable();
            $table->integer('expected_attendees')->nullable();
            $table->decimal('budget', 10, 2)->nullable();
            $table->boolean('needs_help')->default(false);
            $table->text('services_required')->nullable();
            $table->string('logo_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
