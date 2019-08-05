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

    //  /**
    //  * @Route("/events/{id}", name="event_show")
    //  */
    // public function show(Event $event)
    // {        
    //     return $this->json($event);
    // }

    //  /**
    //  * @Route("/api/events/create", name="event_create", methods = {"POST"}) 
    //  */
    // public function create(Request $request, EntityManagerInterface $entityManager, Slugger $slugger) 
    // {
    //     // if is authenticated fully (ROLE_REDACTEUR)... // autres if
    //     $newEvent = json_decode($request->getContent());
    //     $event = new Event();
    //     $event->setName($newEvent->name);
    //     $event->setDate($newEvent->date);
    //     $event->setContent($newEvent->content);
    //     $event->setMedia($newEvent->media);
    //     // $event->setAuthor commentaire car il faut get->current user ...
    //     $slug = $slugger->slugify($event->getName());
    //     $event->setSlug($slug);

    //     $entityManager->persist($event);
    //     $entityManager->flush();

    //     $data = [
    //         'status' => 201,
    //         'message' => 'L\'événement à été créé'
    //     ];
    //     return new JsonResponse($data, 201);

    // }

    //  /**
    //  * @Route("/api/events/{id}/edit", name="event_edit", methods = {"PUT"})
    //  */
    // public function edit(Event $event, Request $request, Slugger $slugger, EntityManagerInterface $entityManager) 
    // {
    //     // $this->denyAccessUnlessGranted
    //     $event = json_decode($request->getContent());

    //     if ($event === null) {
    //         return new JsonResponse(['message' =>'Cet événement n\'existe pas.'], Response::HTTP_NOT_FOUND);
    //     }

    //     $slug = $slugger->slugify($event->getName());
    //     $event->setSlug($slug);

    //     $entityManager->flush();

    //     $response = new JsonResponse($event, 200);
    //     return $response;
    // }

    //  /**
    //  * @Route("/api/events/{id}/delete", name="event_delete")
    //  */
    // public function delete($id) {

    //     $event = $this->getDoctrine()->getRepository(Event::class)->find($id);
        
    //     if ($event) {
    //         $entityManager = $this->getDoctrine()->getManager();
    //         $entityManager->remove($event);
    //         $entityManager->flush();
    //     }
    //     return new Response(null, 204);
    //   }
}
