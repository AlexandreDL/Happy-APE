<?php

namespace App\Controller;

use App\Entity\Event;
use App\Utils\Slugger;
use App\Repository\EventRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\FrameworkBundle\Tests\Fixtures\Validation\Article;

class EventController extends AbstractController {

    /**
     * @Route("/events", name="events_list")
     */
    public function list(EventRepository $eventRepository)
    {
        $events = $eventRepository->findNext3();
        return $this->json($events);
    }

    /**
     * @Route("/events/next", name="events_next")
     */
    public function showNext(EventRepository $eventRepository)
    {
        $event = $eventRepository->findNext();
        return $this->json($event);
    }
}
