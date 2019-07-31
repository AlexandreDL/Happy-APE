<?php

namespace App\Controller;

use App\Entity\Event;
use App\Utils\Slugger;
use App\Form\EventType;
use App\Repository\EventRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\FrameworkBundle\Tests\Fixtures\Validation\Article;

class EventController extends AbstractController {

    /**
     * @Route("/events", name="events_list")
     */
    public function list(EventRepository $repo)
    {

        $events = $repo->findAll();
        return $this->json($events);
    }

     /**
     * @Route("/events/{id}", name="event_show")
     */
    public function show(Event $event)
    {        
        dump($event);
        return $this->json($event);
    }

     /**
     * @Route("/private/events/create", name="event_create")
     * @Route("/private/events/{id}/edit", name="event_edit")
     */
    public function form(Event $event = null, Request $request, ObjectManager $manager)
    {
        if (!$event){
            $event = new Event();
        }

        $form = $this->createForm(EventType::class, $event);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            if(!$event->getId()) {
                $event->setCreatedAt(new \DateTime);
            }
            $manager->persist($event);
            $manager->flush();

            return $this->redirectToRoute('event_show', ['id' => $event->getId()]);
        }

        return $this->json([
            'formEvent' => $form->createView(),
            'editMode' => $event->getId() !== null
        ]);

    }

     /**
     * @Route("/private/events/{id}/delete", name="event_delete")
     */
    public function delete($id) {

        $event = $this->getDoctrine()->getRepository(Event::class)->find($id);
        
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($event);
        $response = new Response();
        $response->send();

        return $this->json($event);
      }
}
