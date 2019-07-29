<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\News;
use App\Repository\NewsRepository;
use App\Entity\Event;
use App\Repository\EventRepository;

class PublicController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home(NewsRepository $newsRepository, EventRepository $eventrepository)
    {
        $lastNewses = $newsRepository->findBy(['isPublished' => true], ['createdAt' => 'DESC'], 5, 0);
        $nextEvent = $eventrepository->findOneBy(['isPublished' => true], ['date' => 'ASC'], 1, 0);
        return $this->json([
        'title' => 'homepage', 
        'news' => $lastNewses,
        'nextEvent' => $nextEvent,
    ]);
    }    
}

