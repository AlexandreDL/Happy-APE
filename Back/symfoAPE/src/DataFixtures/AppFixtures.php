<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Event;
use Nelmio\Alice\Loader\NativeLoader;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i = 1; $i <= 10; $i++){
            $event = new Event();
            $event->setName("Titre de l'événement n°$i")
                  ->setContent("<p>Contenu de l'événement n°$i</p>");
                  //->getMedia("http://placehold.it/350x150")
                
            $manager->persist($event);
        }

        $loader = new NativeLoader();
        
        $entities = $loader->loadFile(__DIR__.'/fixtures.yml')->getObjects();
        
        foreach ($entities as $entity) {
            $manager->persist($entity);
        };
   
        $manager->flush();
    }
}
