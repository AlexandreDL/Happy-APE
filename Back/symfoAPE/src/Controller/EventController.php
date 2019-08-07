<?php

namespace App\Controller;

use App\Repository\EventRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
