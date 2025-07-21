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
        Schema::table('headings', function (Blueprint $table) {
            $table->string('button1_title')->nullable();
            $table->string('button1_title_kh')->nullable();
            $table->string('button1_link')->nullable();
            $table->string('button2_title')->nullable();
            $table->string('button2_title_kh')->nullable();
            $table->string('button2_link')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('headings', function (Blueprint $table) {
            $table->dropColumn([
                'button1_title',
                'button1_title_kh',
                'button1_link',
                'button2_title',
                'button2_title_kh',
                'button2_link'
            ]);
        });
    }
};
