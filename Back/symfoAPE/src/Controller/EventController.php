<?php

namespace App\Controller;

use App\Entity\Event;
use App\Repository\EventRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class EventController extends AbstractController
{
    /**
     * @Route("/events", name="events_list")
     */
    public function list(Request $request)
    {
        $repository = $this->getDoctrine()->getRepository(Event::class);

        $searchTitle = $request->request->get('title');

        if($searchTitle){
            $events = $repository->findByTitle($searchTitle);
 
         } else {
            $events = $repository->findById($id);
         }
         $lastEvents = $repository->lastRelease(3);
        
        return $this->json('src/Repository/EventRepository.php',[
            'events' => $events,
        ]);
    }

     /**
     * @Route("/events/{id}", name="event_details")
     */
    public function show()
    {
        return $this->json(['title' => 'événements', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }

     /**
     * @Route("/private/events/create", name="event_add")
     */
    public function add()
    {
        return $this->json(['title' => 'événements', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }

     /**
     * @Route("/private/events/{id}/edit", name="event_edit")
     */
    public function edit()
    {
        return $this->json(['title' => 'événements', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }

     /**
     * @Route("/events/{id}/delete", name="event_delete")
     */
    public function delete()
    {
        return $this->json(['title' => 'événements', 
    'content' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident ipsum enim adipisci tempore sit amet pariatur, praesentium saepe doloribus quisquam quos rerum! Quaerat ratione at iste exercitiatonem id perferendis?']);
    }
}
