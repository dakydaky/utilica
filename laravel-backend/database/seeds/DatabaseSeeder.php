<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        $landlord = new App\User();
        $landlord->username='landlord';
        $landlord->email='landlord@gmail.com';
        $landlord->password= Hash::make('landlord');
        $landlord->type='landlord';
        $landlord->firstName='landlord';
        $landlord->lastName='landlord';
        $landlord->personalNumber='123456';

        $landlord->save();

        $tenet = new App\User();

        $tenet->username='tenet';
        $tenet->email='tenet@gmail.com';
        $tenet->password= Hash::make('tenet');
        $tenet->type='tenet';
        $tenet->firstName='tenet';
        $tenet->lastName='tenet';
        $tenet->personalNumber='123456';

        $tenet->save();


        $building = new App\Building();

        $building->user_id = $landlord->id;
        $building->buildingName = 'Junior';
        $building->city = 'Vasteras';
        $building->street = 'Vasagatan';
        $building->streetNo = '40';

        $building->save();


        for( $i = 0; $i < 10; $i++) {
            echo $i;
            $a = new App\Apartment();
            $a->apartmentName ='Apartment' . $i;
            $a->building_id = $building->id;

            echo $i;
            if( $i == 0 || $i == 1) {
                $a->passKey = '11';
                if( $i == 1)
                    $a->passKey = '12';
                $a->user_id = $tenet->id;
            }

            echo $i;
            $a->save();

        }




    }
}
