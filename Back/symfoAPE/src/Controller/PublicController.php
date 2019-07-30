<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\NewsRepository;
use App\Repository\EventRepository;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Response;

class PublicController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home(NewsRepository $newsRepository, EventRepository $eventrepository)
    {
        $lastNewses = $newsRepository->findBy(['isPublished' => true], ['createdAt' => 'DESC'], 5, 0);
        $nextEvent = $eventrepository->findOneBy(['isPublished' => true], ['date' => 'ASC'], 1, 0);

        $serializer = SerializerBuilder::create()->build();

        $response = new Response($serializer->serialize([
            'title' => 'Homepage',
            'news' => $lastNewses,
            'nextEvent' => $nextEvent,
        ], 'json'), 200, ['Content-type' => 'application/json']);

        return $response;
    }    
}

