<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInquiriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // sender, senderMail
        Schema::create('inquiries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id'); // tenet
            $table->integer('building_id'); // to find landlord
            $table->integer('apartment_id');

            $table->string('subject'); // title
            $table->longText('body'); // text

            $table->boolean('unread');
            $table->boolean('starred');

            // $table->integer('folderId'); // 1 - inbox, 2 - sent, 3 - draft, 4 - trash ...
            $table->enum('sender', ['tenet', 'landlord']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inquiries');
    }
}
