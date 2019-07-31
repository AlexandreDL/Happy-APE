<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\NewsRepository;
use App\Repository\EventRepository;

class PublicController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home(NewsRepository $newsRepository, EventRepository $eventrepository)
    {
        $lastNewses = $newsRepository->findNext3();
        $nextEvent = $eventrepository->findNext();
        return $this->json([
        'title' => 'homepage', 
        'news' => $lastNewses,
        'nextEvent' => $nextEvent,
    ]);
    }
}

